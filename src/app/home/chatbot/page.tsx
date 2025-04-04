'use client'

import withAuth from "@/components/withAuth"
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import NavPages from "@/components/NavPages";

function Conteudo1() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (user) {
                setUserName(user.user_metadata.name);
            } else if (error) {
                console.error('Erro ao buscar usuário: ', error.message);
            }
        };
        fetchUser();
    }, []);

    return (
        <div>
            <NavPages nomePage="Acompanhamento" />
            <h1>Aqui vai ficar o chatbot</h1>

        </div>
    )
}

export default withAuth(Conteudo1);