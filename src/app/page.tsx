import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ffffff]">
      <Card className="w-full max-w-md overflow-hidden">
        <CardHeader className="p-4 flex flex-row items-center">
          <Link className="flex items-center gap-2 text-sm font-semibold text-black" href="#">
            <Avatar className="w-8 h-8 border">
              <AvatarImage alt="@wuan.xyz" src="https://cdn.discordapp.com/attachments/1056360628551421953/1189155005249376316/GWZNm2h.jpg?ex=659d21e6&is=658aace6&hm=a5e4ecf56f545f83608d154d46ff65b5424c215fdda882976a719b1fcb6d24b6&" />
              <AvatarFallback className="text-black">U</AvatarFallback>
            </Avatar>
            <span className="text-black">Juanito</span>
          </Link>
        </CardHeader>
        <CardContent className="p-0">
          <img
            alt="Instagram Post"
            className="aspect-square object-cover w-full"
            height="400"
            src="https://get.wallhere.com/photo/1080x1080-px-artwork-Ilya-Kuvshinov-1264881.jpg"
            width="400"
          />
        </CardContent>
        <CardFooter className="p-4">
          <div className="flex items-center">
            <Button className="text-black" size="icon" variant="ghost">
              <HeartIcon className="w-4 h-4 text-black" />
              <span className="sr-only">Like</span>
            </Button>
            <span className="text-xs ml-1 text-black">500</span>
            <Button className="text-black" size="icon" variant="ghost">
              <MessageCircleIcon className="w-4 h-4 text-black" />
              <span className="sr-only">Comment</span>
            </Button>
            <span className="text-xs ml-1 text-black">50</span>
            <Button className="text-black" size="icon" variant="ghost">
              <SendIcon className="w-4 h-4 text-black" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  )
}


function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}
