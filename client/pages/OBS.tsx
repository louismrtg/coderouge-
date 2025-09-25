import OBSBanner from "@/components/OBSBanner";

export default function OBSPage() {
  return (
    <div className="w-screen h-screen bg-transparent">
      <OBSBanner autoHideMs={10000} />
    </div>
  );
}
