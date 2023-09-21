"use client";

import React from "react";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Forward } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  title: z.string().min(3, { message: "title is required" }).max(255),
});

function CreatePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const router = useRouter();

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("🚀 ~ file: page.tsx:36 ~ onSubmit ~ values:", values);

    try {
      const response = await axios.post("/api/courses", values);
      const { id } = response.data;
      if(!id) {
        throw new Error("Something went wrong try again later");
      }
      router.push(`/teacher/courses/${id}`);
      toast.success("Course created successfully");
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:items-center md:justify-center h-full p-6">
      <div className="md:text-center">
        <h1 className="text-3xl font-semibold mb-4">Create Course</h1>
        <p className="text-gray-500 text-sm">
          What would you like to name your course?
        </p>
        <p className="text-gray-500 mb-4  text-sm">
          You can change this later.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="title">Course Title</FormLabel>
                <FormControl>
                  <Input
                    id="title"
                    aria-describedby="title"
                    placeholder="Title my new course"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormDescription id="title-input-description">
                  What would you like to name your course?
                </FormDescription>
                <FormMessage>
                  {form.formState.errors.title?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <div className="flex justify-end gap-2">
            <Link href="/teacher/courses">
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              <Forward className="mr-2 h-4 w-4" /> Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default CreatePage;
