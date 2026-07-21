export const IconEyeVisible = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 fill-none stroke-[#333333]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Контур ока */}
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    {/* Зіниця */}
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export const IconEyeHidden = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 fill-none stroke-[#333333]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Контур ока */}
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    {/* Зіниця */}
    <circle cx="12" cy="12" r="3" />
    {/* Лінія закреслення */}
    <line x1="3" y1="3" x2="21" y2="21" />
  </svg>
)