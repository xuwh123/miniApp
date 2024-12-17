declare namespace API {
    namespace Sys{
        type UserInfo = {
            created_by: number | null;
            created_time: string;
            deleted: number;
            department_id: number | null;
            last_login_time: string | null;
            login_account: string | null;
            login_ip: string | null;
            login_password: string | null;
            phone_number: string | null;
            reset_answer: string | null;
            reset_question: string | null;
            status: number;
            updated_by: number | null;
            updated_time: string;
            user_id: number;
            username: string | null;
        }
    }
}