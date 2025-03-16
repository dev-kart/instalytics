"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle} from 'lucide-react';
import ChatPage from "./ChatPage";
import { IoClose } from "react-icons/io5";

const PopupChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full p-5 bg-blue-600"
      >
        <MessageCircle size={60} />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 w-[400px] h-[600px] bg-background rounded-3xl shadow-lg overflow-hidden"
          >
            <div className="relative h-full">
              <Button
                onClick={() => setIsOpen(false)}
                className="text-white absolute top-2 right-2 z-10"
                variant="ghost"
                size="icon"
              >
                <IoClose />
              </Button>
              <div className="h-full">
                <ChatPage />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PopupChat;

