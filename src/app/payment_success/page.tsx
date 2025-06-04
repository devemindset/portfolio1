"use client";
import { useAuthState } from "@/context/AuthContext";
import api from "@/lib/api";
import axios from "axios";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SuccessPage: NextPage = () => {
  const { getUserInfo } = useAuthState();
  const router = useRouter();
  const { session_id } = router.query;

  const [loading, setLoading] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!session_id) return;

      try {
        // Appel à l'API Stripe pour récupérer session info
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SESSION_API_URL}/api/payments/stripe_session_status/${session_id}`);
        const { status, amount_total, user_id } = res.data;

       

        if (status === 'paid') {
       
          // Appel vers ton backend principal pour ajouter les crédits
          const resp = await api.post(`/user/add_credits/`, {
            user_id,
            amount_total,
            session_id
          });

          if(resp.status === 200 || resp.status === 201){
            await getUserInfo()
            setConfirmed(true);

          }

        } else {
          setError("Paiement non confirmé");
        }

      } catch{
        
        setError("Erreur lors de la vérification");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [session_id]);

  return (
    <main className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        {loading && <p>⏳ Vérification du paiement...</p>}
        {error && <p className="text-red-600">❌ {error}</p>}
        {confirmed && (
          <>
          <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 ✅ Payment Successful!</h1>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. Your credits have been added to your account. You can now use premium features.
        </p>

        <Link href="/my-workspace">
          <span className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Go to My Workspace
          </span>
        </Link>
        </>
        )}

        <p className="mt-6 text-sm text-gray-500">
          Need help? <Link href="/contact" className="text-blue-600 underline">Contact Support</Link>
        </p>
      </div>
    </main>
  )
}

export default SuccessPage