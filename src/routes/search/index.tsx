import { createFileRoute, Link } from "@tanstack/react-router"
import z from "zod"
import { courses } from "@/data/courses"
import { CourseCard } from "@/components/course-card"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SearchIcon, ArrowLeft, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useNavigate } from "@tanstack/react-router"

export const Route = createFileRoute("/search/")({
    validateSearch: z.object({
        query: z.string().optional(),
    }),
    component: SearchPage,
})

function SearchPage() {
    const search = Route.useSearch()
    const navigate = useNavigate()
    const [query, setQuery] = useState(search.query || "")

    useEffect(() => {
        setQuery(search.query || "")
    }, [search.query])

    const filteredCourses = courses.filter((course) => {
        if (!search.query) return true
        const q = search.query.toLowerCase()
        return (
            course.title.toLowerCase().includes(q) ||
            course.description.toLowerCase().includes(q) ||
            course.category.toLowerCase().includes(q)
        )
    })

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        navigate({
            to: "/search",
            search: (prev) => ({ ...prev, query: query || undefined }),
        })
    }

    const clearSearch = () => {
        setQuery("")
        navigate({ to: "/search", search: {} })
    }

    return (
        <div className="flex-1 min-h-screen pt-24 pb-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-8">
                    {/* Header Section */}
                    <div className="flex flex-col gap-6">
                        <Link
                            to="/"
                            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Link>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight">Find Your Course</h1>
                                <p className="text-muted-foreground mt-1">
                                    {search.query
                                        ? `Showing results for "${search.query}"`
                                        : "Browse all our available courses"}
                                </p>
                            </div>

                            <form onSubmit={handleSearch} className="w-full md:w-auto">
                                <div className="flex gap-2">
                                    <InputGroup className="w-full md:w-80 bg-background">
                                        <InputGroupInput
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            placeholder="Search courses..."
                                        />
                                        {query && (
                                            <InputGroupAddon>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    type="button"
                                                    onClick={() => setQuery("")}
                                                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </InputGroupAddon>
                                        )}
                                    </InputGroup>
                                    <Button type="submit">Search</Button>
                                </div>
                            </form>
                        </div>

                        {/* Active Filters */}
                        {search.query && (
                            <div className="flex flex-wrap items-center gap-2 pt-2">
                                <span className="text-sm font-medium text-muted-foreground">Active filters:</span>
                                <Badge
                                    variant="secondary"
                                    className="px-3 py-1 text-sm font-normal gap-2 hover:bg-secondary/80"
                                >
                                    Query: {search.query}
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-4 w-4 p-0 hover:bg-transparent text-muted-foreground hover:text-foreground ml-1"
                                        onClick={clearSearch}
                                    >
                                        <X className="h-3 w-3" />
                                        <span className="sr-only">Remove query filter</span>
                                    </Button>
                                </Badge>
                                <Button
                                    variant="link"
                                    size="sm"
                                    className="text-muted-foreground hover:text-foreground h-auto p-0 ml-2"
                                    onClick={clearSearch}
                                >
                                    Clear all
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Results Grid */}
                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-muted/30 rounded-lg">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                                <SearchIcon className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <h3 className="text-lg font-semibold">No courses found</h3>
                            <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
                                We couldn't find any courses matching "{search.query}". Try checking for typos or using
                                broader keywords.
                            </p>
                            <Button
                                variant="link"
                                onClick={() => {
                                    setQuery("")
                                    navigate({ to: "/search", search: {} })
                                }}
                                className="mt-4"
                            >
                                Clear search
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
