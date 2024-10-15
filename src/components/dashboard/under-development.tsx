import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Construction, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface UnderDevelopmentProps {
  title?: string
  description?: string
  returnPath?: string
}

export default function UnderDevelopment({
  title = "Under Development",
  description = "We're working hard to bring you this feature. Please check back soon!",
  returnPath = "/dashboard"
}: UnderDevelopmentProps) {
  return (
    <div className=" mx-auto p-6 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Construction className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">{description}</p>
          <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md">
            <p className="text-sm text-yellow-700">
              Our team is actively working on this section. We appreciate your patience and look forward to sharing it with you soon!
            </p>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Link href={returnPath}>
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to Dashboard
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}