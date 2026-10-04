import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 pt-20 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest/60">404</p>
      <h1 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">This path is overgrown.</h1>
      <p className="mt-4 text-foresttext/65 dark:text-white/60">
        The page you are looking for does not exist. Let’s take you back to clearer ground.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Back home <FiArrowRight size={16} />
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact
        </Link>
      </div>
    </div>
  );
}
