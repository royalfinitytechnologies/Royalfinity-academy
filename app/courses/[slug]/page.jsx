import { notFound } from "next/navigation";
import { coursesData } from "./coursesData";
import CourseClient from "./CourseClient";

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = coursesData[slug];
  if (!course) notFound();
  return <CourseClient course={course} />;
}