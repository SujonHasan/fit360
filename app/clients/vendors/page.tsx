import Vendors from "@/src/containers/clients/vendors";
import Protected from "@/src/containers/layout/protected";

export default function VendorPage() {
  return (
    <Protected>
      <Vendors/>
    </Protected>
  )
}
