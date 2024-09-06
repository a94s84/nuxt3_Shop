export default function () {
    const user = useSupabaseUser();
    const supabase = useSupabaseClient();

    const login = async () => {
        const {error} = supabase.auth.signInWithOAuth({ provider: 'google'})
        if(error) alert(`登入失敗，請聯繫服務人員 ${error}`)
    }

    const logout = async () => {
        const { error } = await supabase.auth.signOut()
        if(error) alert(`登出失敗，請聯繫服務人員 ${error}`)
        user.value = null
        navigateTo('/')
    }

    return { login, logout }
}