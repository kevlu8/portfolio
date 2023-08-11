'use client';
import { usePathname } from 'next/navigation';

export default function() {
	const url = usePathname();
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<h1 className='text-8xl'>404</h1>
			<p1 className='text-slate-600'>You're a "{url.substring(1)}"</p1>
		</div>
	);
}
