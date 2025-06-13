const CloudSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={96} height={56} {...props}>
    <path fill="#FFF" d="M16 24h64v16H16z" />
    <path
      fill="#FFF"
      d="M8 20h16v16H8zM24 16h16v16H24zM40 12h16v16H40zM56 16h16v16H56zM72 20h16v16H72z"
    />
  </svg>
);
export default CloudSVG;
