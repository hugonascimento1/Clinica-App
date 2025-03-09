import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Loading from "@/components/Loading";

const withAuth = (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const fetchSession = async () => {
                const { data, error } = await supabase.auth.getSession();
                if (error || !data.session) {
                    router.push('/')
                } else {
                    setLoading(false);
                }
            };
            fetchSession();
        }, [router]);

        if (loading) {
            return(
                <div><Loading /></div>
            )
        }

        return <WrappedComponent {...props} />
    };
};

export default withAuth;