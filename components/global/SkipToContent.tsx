import { Link } from "rebass";

const SkipToContent = () => {
  return (
    <Link
      href="#main"
      sx={{
        position: "fixed",
        zIndex: 100,
        top: 0,
        left: "50%",
        right: 0,
        width: "max-content",
        p: "var(--s1)",
        my: "var(--s1)",
        background: "var(--color-text-primary)",
        color: "var(--color-bg-primary)",
        transition: "transform .25s ease-in-out",
        transform: "translate3d(-50%, -150%, 0)",
        "&:focus": {
          transform: "translate3d(-50%, 0, 0)",
        },
      }}
    >
      Skip to main content
    </Link>
  );
};

export default SkipToContent;
