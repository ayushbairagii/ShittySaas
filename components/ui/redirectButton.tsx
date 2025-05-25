// components/RedirectButton.tsx
"use client"

import { Button } from "@/components/ui/button"
import React from "react"

export function RedirectButton(props: React.ComponentProps<typeof Button>) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran"
  }

  return <Button {...props} onClick={handleClick} />
}
