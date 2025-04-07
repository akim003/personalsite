import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function BlogSection() {
  return (
    <section id="blog" className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Coming soon! I'll be sharing insights on aerospace engineering, software development, and my ongoing
              projects.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Card className="border-dashed">
            <CardHeader>
              <h3 className="text-xl font-bold text-center">Blog Section Under Construction</h3>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-8">
              <p className="text-center text-muted-foreground">
                I'm working on creating interesting content about my projects, research, and experiences in aerospace
                engineering. Check back soon for articles and tutorials!
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-muted-foreground">Expected launch: Summer 2024</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

