import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FloatingButton = () => (
  <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
    <a href="#" aria-label="Facebook" className="bg-[var(--color-primary)] text-white p-3 rounded-full shadow-lg hover:bg-[var(--color-accent)] transition"><FaFacebookF /></a>
    <a href="#" aria-label="Instagram" className="bg-[var(--color-primary)] text-white p-3 rounded-full shadow-lg hover:bg-[var(--color-accent)] transition"><FaInstagram /></a>
    <a href="#" aria-label="LinkedIn" className="bg-[var(--color-primary)] text-white p-3 rounded-full shadow-lg hover:bg-[var(--color-accent)] transition"><FaLinkedinIn /></a>
  </div>
);

export default FloatingButton;
