export default function Paragraph({ children, className = "" }) {
    return (
      <p className={`font-body text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed ${className}`}>
        {children}
      </p>
    );
  }
  