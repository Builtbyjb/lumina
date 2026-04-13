import { useNavigate, Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  // AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { CreditCardIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const auth = true;
  // TODO: Handle authentication

  return (
    <>
      <nav className="border-b-2">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span onClick={() => navigate("/")} className="text-2xl font-semibold tracking-tight cursor-pointer">
              Lumina
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/models" className="text-sm hover:underline">
              Models
            </Link>
            <Link to="/chat" className="text-sm hover:underline">
              Chat
            </Link>
            <Link to="/documentation" className="text-sm hover:underline">
              Documentation
            </Link>
            {auth ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="default" className="font-normal">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src="https://i.pravatar.cc/150?img=35" alt="placeholder" />
                        <AvatarFallback>ER</AvatarFallback>
                        {/*<AvatarBadge className="bg-green-600 dark:bg-green-800" />*/}
                      </Avatar>
                      personal
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-primary">
                    <DropdownMenuItem>
                      <UserIcon />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCardIcon />
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <SettingsIcon />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      <LogOutIcon />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button onClick={() => navigate("/login")}>Login</Button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
