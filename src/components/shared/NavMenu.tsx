"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { LogIn, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import PharmaDeshLogo from "./PDLogo";

const categories = [
  "Medicine",
  "Wellness",
  "Healthcare",
  "Personal Care",
  "Prescription Medicines",
  "Supplements & Vitamins",
];

export const Navmenu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const cartItemCount = 3; // Replace with actual cart state
  const isAuthenticated = false; // Replace with actual auth state

  return (
    <header className="max-w-screen-2xl mx-auto shadow-md backdrop-blur-[5px] sticky top-0 rounded-[6px] px-4 left-0 z-50 bg-white">
      <div className="hidden lg:flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-2">
          <PharmaDeshLogo />
        </Link>
        <div className="flex items-center space-x-6 mt-4">
          <Select
            onValueChange={setSelectedCategory}
            defaultValue={selectedCategory}
          >
            <SelectTrigger className="rounded-[6px] text-lg px-4 py-2 w-[200px] bg-gray-200 hover:bg-gray-300">
              {selectedCategory}
            </SelectTrigger>
            <SelectContent className="bg-[#f5f5f5] rounded-[6px]">
              {categories.map((cat) => (
                <SelectItem
                  key={cat}
                  value={cat}
                  className="text-lg hover:bg-gray-300"
                >
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center space-x-3 w-[400px]">
            <Input
              type="text"
              placeholder="Search for medicines..."
              className="w-full text-lg rounded-[6px] placeholder:text-[#00897b] border border-gray-300"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="bg-[#00897b] text-white px-4 py-2 rounded-[6px] hover:bg-[#42a5f5]">
              <Search size={24} />
            </Button>
          </div>
          <Link href="/cart" className="relative hover:text-[#00897b]">
            <ShoppingCart size={32} />
            {cartItemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-teal-500 text-sm text-white rounded-full px-2">
                {cartItemCount}
              </Badge>
            )}
          </Link>
          {isAuthenticated ? (
            <Link href="/profile" className="text-black hover:text-[#00897b]">
              <User size={32} className="rounded-full border p-1" />
            </Link>
          ) : (
            <Link href="/signin">
              <Button className="bg-[#00897b] text-white px-4 py-2 rounded-[6px] hover:bg-[#42a5f5]">
                <LogIn size={24} className="mr-2" /> Sign in
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="lg:hidden py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <PharmaDeshLogo />
        </Link>
        <div className="flex items-center space-x-6 mt-4">
          <Link href="/cart" className="relative hover:text-[#00897b]">
            <ShoppingCart size={32} />
            {cartItemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-teal-500 text-sm text-white rounded-full px-2">
                {cartItemCount}
              </Badge>
            )}
          </Link>
          {isAuthenticated ? (
            <Link href="/profile" className="text-black hover:text-[#00897b]">
              <User size={32} className="rounded-full border p-1" />
            </Link>
          ) : (
            <Link href="/signin">
              <Button className="bg-[#00897b] text-white px-4 py-2 rounded-[6px] hover:bg-[#42a5f5]">
                <LogIn size={24} className="mr-2" /> Sign in
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="lg:hidden bg-gray-200 p-3 rounded-md">
        <Select
          onValueChange={setSelectedCategory}
          defaultValue={selectedCategory}
        >
          <SelectTrigger className="rounded-lg text-lg px-4 py-2 w-full bg-gray-300 hover:bg-gray-400">
            {selectedCategory}
          </SelectTrigger>
          <SelectContent className="bg-white rounded-lg">
            {categories.map((cat) => (
              <SelectItem
                key={cat}
                value={cat}
                className="text-lg hover:bg-gray-300"
              >
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Mobile Search */}
      <div className="lg:hidden mt-3 p-3">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Search for medicines..."
            className="w-full text-lg rounded-lg placeholder:text-[#00897b] border border-gray-300"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button className="bg-[#00897b] text-white px-4 py-2 rounded-lg hover:bg-[#42a5f5]">
            <Search size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};
