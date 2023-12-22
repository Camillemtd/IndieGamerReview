"use client";
import { useState } from 'react';
import {LinkIcon} from '@heroicons/react/20/solid';

export default function ShareLinkButton() {
	const [clicked, setClicked] = useState(false);
	const handleCLick = () => {
		navigator.clipboard.writeText(window.location.href);
		setClicked(true);
		setTimeout(() => setClicked(false), 1500);
	}
  return (
	<button onClick={handleCLick} className="border px-2 py-1 rounded text-slate-300 text-sm hover:bg-orange-300 hover:text-slate-700 flex flex-xol items-center gap-1">
		<LinkIcon className="h-4 w-4"/>
		{clicked ? 'Link copied' : 'Share Link'}
	</button>
  );
}