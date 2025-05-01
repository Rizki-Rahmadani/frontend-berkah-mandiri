import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Register() {
  return (
    <div className="flex items-center justify-center md:p-20">
      <Card className="md:w-[350px] w-[100%]">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-col items-start space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Username" />
              </div>
              <div className="flex flex-col items-start space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="example@gmail.com" />
              </div>
              <div className="flex flex-col items-start space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="******" />
              </div>
            </div>
            <div className="mt-5">
              <Button>Submit</Button>
              <CardDescription>
                Do you have an account ?{" "}
                <a href="/login" className="text-blue-600 hover:text-blue-800">
                  Login
                </a>
              </CardDescription>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
