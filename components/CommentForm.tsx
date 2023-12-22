export interface CommentFormProps {
	title: string;
  }
  
  export default function CommentForm({ title }: CommentFormProps) {
	return (
	  <form className="border  bg-stone-700 flex flex-col gap-2 mt-3 px-3 py-3 rounded">
		<p className="pb-1">
		  Already played <strong>{title}</strong>? Have your say!
		</p>
		<div className="flex">
		  <label htmlFor="userField" className="shrink-0 w-32">
			Your name
		  </label>
		  <input id="userField" className="border px-2 py-1 rounded w-48" />
		</div>
		<div className="flex">
		  <label htmlFor="messageField" className="shrink-0 w-32">
			Your comment
		  </label>
		  <textarea id="messageField" className="border px-2 py-1 rounded w-full" />
		</div>
		<button type="submit"
		  className=" rounded px-2 py-1 self-center border bg-slate-500
					 text-slate-50 w-32 hover:bg-orange-300">
		  Submit
		</button>
	  </form>
	);
  }