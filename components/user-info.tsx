import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

interface UserInfoProps {
    user?: ExtendedUser;
    label: string;
}

export const UserInfo = ({
    user,
    label,
}: UserInfoProps) => {

    return (
        <Card className="w-[600px] shadow-md bg-slate-900 border-[1px] border-slate-700">
            <CardHeader>
                <p className="text-2xl font-semibold text-center text-slate-200">
                    {label}
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-row items-center 
                justify-between rounded-lg border-[1px] border-slate-600 p-3 shadow-sm">
                    <p className="text-sm font-medium text-slate-200">
                        ID
                    </p>
                    <p className="truncate text-sx max-w-[180px] 
                    font-mono p-1 bg-slate-700 text-slate-300 rounded-md">
                        {user?.id}
                    </p>
                </div>
                <div className="flex flex-row items-center 
                justify-between rounded-lg border-[1px] border-slate-600 p-3 shadow-sm">
                    <p className="text-sm font-medium text-slate-200">
                        Name
                    </p>
                    <p className="truncate text-sx max-w-[180px] 
                    font-mono p-1 bg-slate-700 text-slate-300 rounded-md">
                        {user?.name}
                    </p>
                </div>
                <div className="flex flex-row items-center 
                justify-between rounded-lg border p-3 shadow-sm border-slate-600">
                    <p className="text-sm font-medium text-slate-200">
                        Email
                    </p>
                    <p className="truncate text-sx max-w-[180px] 
                    font-mono p-1 bg-slate-700 text-slate-300 rounded-md">
                        {user?.email}
                    </p>
                </div>
                <div className="flex flex-row items-center 
                justify-between rounded-lg border-[1px] border-slate-600 p-3 shadow-sm">
                    <p className="text-sm font-medium text-slate-200">
                        Role
                    </p>
                    <p className="truncate text-sx max-w-[180px] 
                    font-mono p-1 bg-slate-700 text-slate-300 rounded-md">
                        {user?.role}
                    </p>
                </div>
                <div className="flex flex-row items-center 
                justify-between rounded-lg border-[1px] border-slate-600 p-3 shadow-sm">
                    <p className="text-sm font-medium text-slate-200">
                        Two Factor Authentication
                    </p>
                    <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
                        {user?.isTwoFactorEnabled ? "ON" : "OFF"}
                    </Badge>
                </div>
            </CardContent>
        </Card>
    )
}