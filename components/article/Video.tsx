import { Box } from "rebass";

type Props = {
  src: string;
  alt: string;
  caption?: string;
};

const Video = ({ src, alt, caption }: Props) => {
  return (
    <Box sx={{ mb: "var(--s3)" }}>
      <Box
        as="video"
        autoPlay
        loop
        controls
        muted
        playsInline
        aria-label={alt}
        sx={{
          width: "100%",
          borderRadius: "3px",
          boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.42)",
        }}
      >
        <source src={`${src}.webm`} type="video/webm" />
        <source src={`${src}.mp4`} type="video/mp4" />
        <source src={`${src}.ogv`} type="video/ogg" />
      </Box>
      {caption && (
        <Box
          sx={{
            p: "var(--s1)",
            color: "var(--color-text-secondary)",
            textAlign: "center",
          }}
        >
          {caption}
        </Box>
      )}
    </Box>
  );
};

export default Video;
