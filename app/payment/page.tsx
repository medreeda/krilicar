import Image from "next/image";
import { NavBar } from "/components";
import PaymentComponent from "/components/PaymentComponent";
import { FaCreditCard, FaPaypal } from "react-icons/fa"; // Importing React icons

export default function PaymentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar  showNavbar={true}/>
      <PaymentComponent />
    </div>
  );
}
