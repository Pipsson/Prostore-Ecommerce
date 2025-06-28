"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEFAULT_SIGN_IN_VALUES } from "@/lib/constants";
import Link from "next/link";
import React from "react";

const CredentialsSignInForm = () => {
  return (
    <form>
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            autoComplete="email"
            defaultValue={DEFAULT_SIGN_IN_VALUES.email}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            defaultValue={DEFAULT_SIGN_IN_VALUES.password}
            autoComplete="current-password"  
          />
        </div>
        <Button type="submit" className="w-full " variant="default">Sign In</Button>
        <div className="text-sm text-center text-muted-foreground">
            Don&apos;t have an account? {''} <Link href="/sign-up" target="_self" className="link">Sign Up</Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
