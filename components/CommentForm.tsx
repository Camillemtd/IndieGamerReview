import { createComment } from "@/lib/comments";
import { redirect } from "next/navigation";

export interface CommentFormProps {
	title: string;
	slug: string;
  }
  
  export default function CommentForm({ slug, title }: CommentFormProps) {
	async function action(formData: FormData) {
	  'use server';
	  const comment = await createComment({
		slug,
		user: formData.get('user') as string,
		message: formData.get('message') as string,
	  });
	  console.log('created:', comment);
	  redirect(`/reviews/${slug}`)
	}
	return (
	  <form action={action} className="border  bg-stone-700 flex flex-col gap-2 mt-3 px-3 py-3 rounded ">
		<p className="pb-1">
		  Already played <strong>{title}</strong>? Have your say!
		</p>
		<div className="flex">
		  <label htmlFor="userField" className="shrink-0 w-32">
			Your name
		  </label>
		  <input id="userField" name="user" className="border px-2 py-1 rounded w-48 text-black" />
		</div>
		<div className="flex">
		  <label htmlFor="messageField" className="shrink-0 w-32">
			Your comment
		  </label>
		  <textarea id="messageField" name="message" className="border px-2 py-1 rounded w-full text-black" />
		</div>
		<button type="submit"
		  className=" rounded px-2 py-1 self-center border bg-slate-500
					 text-slate-50 w-32 hover:bg-orange-300">
		  Submit
		</button>
	  </form>
	);
  }