const FeatureCard = ({ icon, title, description, note }) => {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-indigo-100/60 bg-indigo-50/40 p-3 transition-all hover:bg-white hover:shadow-md">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xl shadow-sm">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>

        <p className="mt-1 text-sm leading-relaxed text-gray-500">
          {description}
        </p>

        <div className="mt-2 flex items-center gap-1 text-xs text-indigo-500">
          <span>✓</span>
          <span>{note}</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;