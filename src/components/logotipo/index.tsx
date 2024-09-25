import './logotipo.css'

export const Marca = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      viewBox="0 0 1278 2152"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,2152.000000) scale(0.100000,-0.100000)">
        <path
          fill="#f1f5f9"
          d="M2333 20520 c-922 -549 -1678 -1002 -1680 -1006 -1 -5 2115 -1194 4702 -2643 2588 -1449 4705 -2637 4705 -2640 -1 -3 -1177 -706 -2615 -1561 l-2615 -1554 0 -1974 c0 -1721 2 -1973 15 -1969 7 3 1794 1065 3969 2359 l3956 2353 0 2365 0 2365 -4127 2310 c-2269 1271 -4240 2374 -4379 2452 l-253 141 -1678 -998z"
        />
        <path
          fill="#f1f5f9"
          d="M4 12638 c3 -2966 9 -6582 12 -8034 l6 -2642 1686 -973 c927 -535 1693 -973 1703 -973 11 -1 2120 1212 4688 2694 l4670 2695 1 1963 0 1964 -32 -20 c-253 -152 -9311 -5373 -9315 -5368 -3 3 -8 1289 -10 2858 -3 1569 -8 4277 -12 6018 l-6 3164 -1670 1009 c-919 554 -1683 1015 -1699 1023 l-28 16 6 -5394z"
        />
      </g>
    </svg>
  )
}

export const Logotipo = () => {
  return (
    <div className="flex items-center justify-center text-slate-100 text-2xl">
      <a
        className="flex justify-between items-center gap-1"
        href="https://patricklima.vercel.app/"
        target='_blank'>
        <Marca/>
        <div className="fontFamily">DEV</div>
      </a>
    </div>
  );
};
