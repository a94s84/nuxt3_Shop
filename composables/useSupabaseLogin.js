export default function () {
    const supabase = useSupabaseClient();
    const login = async () => {
        const {error} = supabase.auth.signInWithOAuth({  provider: 'google'})
        if(error) console.log(error);
    }

    const user = useSupabaseUser();
    const logout = async () => {
        const { error } = supabase.auth.signOut()
        try {
            await $fetch('/api/_supabase/sesstion', {
                method: 'POST',
                body: { event: 'SIGNED_OUT', session: null}
            })
        } catch (error) {
            return console.log(error)
        }
        user.value = null
        navigateTo('/')
    }

    return { login, logout}
}