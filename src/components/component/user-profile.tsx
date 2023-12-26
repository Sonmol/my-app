import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export function UserProfile() {
  return (
    <main key="1" className="p-4 bg-[rgba(0,1,1,255)] text-white">
      <Card className="max-w-xl mx-auto bg-[rgba(0,1,1,255)]">
        <CardContent className="p-4 bg-[rgba(0,1,1,255)]">
          <div className="flex items-center space-x-4">
            <Avatar className="w-24 h-24 border-2 border-transparent bg-gradient-to-r from-orange-500 to-purple-500">
              <AvatarImage alt="@username" src="/placeholder-user.jpg" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-2xl font-bold text-white">@username</h2>
                <Badge className="items-center" variant="outline">
                  <BadgeIcon className="h-3.5 w-3.5 text-blue-500 -translate-x-1" />
                  <span className="text-white">Verified</span>
                </Badge>
              </div>
              <p className="text-sm text-gray-400 mt-1">Pronouns: They/Them</p>
              <p className="text-sm text-gray-400 mt-1">Bio: Passionate about tech and innovation.</p>
              <div className="flex space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <strong className="text-white">1500</strong>
                  <span className="text-white">Posts</span>
                </div>
                <div className="flex items-center space-x-1">
                  <strong className="text-white">400k</strong>
                  <span className="text-white">Followers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <strong className="text-white">300</strong>
                  <span className="text-white">Following</span>
                </div>
              </div>
            </div>
          </div>
          <Button className="mt-4 w-full bg-blue-500 text-white">Follow</Button>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-2 space-x-2">
        <hr className="w-7/10 border-t-2 border-white mb-2" />
        <div className="flex items-center space-x-1 border-2 border-white p-2 rounded-md">
          <ImageIcon className="w-4 h-4" />
          <h3 className="text-lg font-semibold text-white">Posts</h3>
        </div>
        <div className="flex items-center space-x-1">
          <BookmarkIcon className="w-4 h-4" />
          <h3 className="text-lg font-semibold text-white">Saved</h3>
        </div>
        <div className="flex items-center space-x-1">
          <TagIcon className="w-4 h-4" />
          <h3 className="text-lg font-semibold text-white">Tagged</h3>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <Card className="shadow-none border-0 p-0">
          <CardContent className="p-0">
            <img
              alt="Posts Image 1"
              className="object-cover w-full h-full"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </CardContent>
        </Card>
        <Card className="shadow-none border-0 p-0">
          <CardContent className="p-0">
            <img
              alt="Saved Image 1"
              className="object-cover w-full h-full"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </CardContent>
        </Card>
        <Card className="shadow-none border-0 p-0">
          <CardContent className="p-0">
            <img
              alt="Tagged Image 1"
              className="object-cover w-full h-full"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


function BadgeIcon(props) {
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  )
}


function ImageIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function BookmarkIcon(props) {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}


function TagIcon(props) {
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
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  )
}
