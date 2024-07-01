"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {
    const onServerActionClicked = () => {
        admin().then((data) => {
            if (data.error) {
                toast.error(data.error);
            }
            if (data.success){
                toast.success(data.success);
            }
        })
    }
    const onApiRouteClick = async () => {
        fetch("/api/admin").then((response) => {
            if (response.ok) {
                toast.success("Allowed API Route!");
            } else {
                toast.error("Forbidden API Route!")
            }
        })
    }
  
  return (
    <Card className="w-[600px] bg-slate-900 border-[1px] border-slate-700">
        <CardHeader>
            <p className="text-2xl font-semibold text-center text-slate-200">
                🗝️ Admin
            </p>
        </CardHeader>
        <CardContent className="space-y-4">
            <RoleGate allowedRoles={UserRole.ADMIN}>
                <FormSuccess 
                message="You are allowed to see this content"/>
            </RoleGate>
            <div className="flex flex-row items-center justify-between 
            rounded-lg border-[1px] border-slate-600 p-3 shadow-md">
                <p className="text-sm font-medium text-slate-200">
                    Admin-only API Route
                </p>
                <Button variant="default" onClick={onApiRouteClick}>
                    Click to test
                </Button>
            </div>
            <div className="flex flex-row items-center justify-between 
            rounded-lg border-[1px] border-slate-600 p-3 shadow-md">
                <p className="text-sm font-medium text-slate-200">
                    Admin-only Server Action
                </p>
                <Button variant="default" onClick={onServerActionClicked}>
                    Click to test
                </Button>
            </div>
        </CardContent>
    </Card>
  )
}

export default AdminPage