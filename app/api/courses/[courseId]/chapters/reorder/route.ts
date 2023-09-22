import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export async function PUT(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    // Get the user's ID from Clerk
    const { userId } = auth();
    // Get the list of chapters from the request body
    const { list } = await req.json();

    // If the user isn't logged in, return a 401
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Find the course with the ID from the request
    // and the user's ID
    const courseOwner = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId,
      },
    });

    // If the user doesn't own the course, return a 401
    if (!courseOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // For each chapter in the list, update the position
    // in the database
    for (let item of list) {
      await db.chapter.update({
        where: {
          id: item.id,
        },
        data: {
          position: item.position,
        },
      });
    }

    // Return a 200
    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    console.log("[CHAPTERS REORDER]", error);
    // Return a 500
    return new NextResponse("Internal Error", { status: 500 });
  }
}
