import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return (
    new ImageResponse(
      (
        <div className="text-2xl w-full h-full flex justify-center items-center bg-black text-white">
          A
        </div>
      )
    ),
    { ...size }
  );
}
