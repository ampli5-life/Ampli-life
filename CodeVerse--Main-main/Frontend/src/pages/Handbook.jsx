"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Book,
  Search,
  Code2,
  FileCode,
  Braces,
  Database,
  Terminal,
  Cpu,
  ArrowRight,
  BookOpen,
  Clock,
  ChevronRight,
  Copy,
  Check,
  Bookmark,
  BookmarkCheck,
  Play,
  Video,
  Star,
  Flame,
  Award,
  CheckCircle,
  Circle,
  Lock,
  Lightbulb,
  ExternalLink,
  MessageSquare,
  Download,
  Zap,
  Target,
  Users,
  X,
  Bot
} from "lucide-react";


import pythonHandbookData from "../data/python_handbook.json";
import cppHandbookData from "../data/cpp_handbook.json";
import javaHandbookData from "../data/java_handbook.json";
import javascriptHandbookData from "../data/javascript_handbook.json";
import sqlHandbookData from "../data/sql_handbook.json";
import goHandbookData from "../data/go_handbook.json";
const languages = [
  {
    id: "python",
    name: "Python",
    icon: "\u{1F40D}",
    color: "from-yellow-500 to-blue-500",
    description: "Versatile, beginner-friendly language for DSA and interviews",
    chapters: pythonHandbookData.total_chapters,
    duration: `${pythonHandbookData.estimated_hours} hours`,
    popularity: "Most Popular",
    progress: 35,
    students: "45.2k",
    rating: 4.9
  },
  {
    id: "java",
    name: "Java",
    icon: "\u2615",
    color: "from-orange-500 to-red-500",
    description: "Enterprise-standard language, perfect for service companies",
    chapters: javaHandbookData.total_chapters,
    duration: `${javaHandbookData.estimated_hours} hours`,
    popularity: "Industry Standard",
    progress: 20,
    students: "38.5k",
    rating: 4.8
  },
  {
    id: "cpp",
    name: "C++",
    icon: "\u26A1",
    color: "from-blue-500 to-purple-500",
    description: "High-performance language, competitive programming favorite",
    chapters: cppHandbookData.total_chapters,
    duration: `${cppHandbookData.estimated_hours} hours`,
    popularity: "CP Favorite",
    progress: 10,
    students: "32.1k",
    rating: 4.7
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "\u{1F310}",
    color: "from-yellow-400 to-yellow-600",
    description: "Essential for web development and frontend interviews",
    chapters: javascriptHandbookData.total_chapters,
    duration: `${javascriptHandbookData.estimated_hours} hours`,
    popularity: "Web Essential",
    progress: 15,
    students: "52.3k",
    rating: 4.8
  },
  {
    id: "sql",
    name: "SQL",
    icon: "\u{1F5C3}\uFE0F",
    color: "from-cyan-500 to-blue-600",
    description: "Database query language, crucial for data roles",
    chapters: sqlHandbookData.total_chapters,
    duration: `${sqlHandbookData.estimated_hours} hours`,
    popularity: "Data Essential",
    progress: 5,
    students: "28.7k",
    rating: 4.6
  },
  {
    id: "go",
    name: "Go",
    icon: "\u{1F537}",
    color: "from-cyan-400 to-blue-400",
    description: "Simple, efficient language for cloud, systems, and concurrency.",
    chapters: goHandbookData.total_chapters,
    duration: `${goHandbookData.estimated_hours} hours`,
    popularity: "Cloud Native",
    progress: 0,
    students: "28.4k",
    rating: 4.8
  }
];
const pythonChapters = pythonHandbookData.chapters.map((chapter, index) => ({
  id: chapter.chapter_id,
  title: chapter.chapter_title,
  topics: ["Comprehensive Guide", chapter.level],
  duration: "30 min",
  completed: index < 5,
  exerciseCount: chapter.exercises.length,
  current: index === 5
}));

const javaChapters = javaHandbookData.chapters.map((chapter, index) => ({
  id: chapter.chapter_id,
  title: chapter.chapter_title,
  topics: ["Comprehensive Guide", chapter.level],
  duration: "45 min",
  completed: index < 4,
  exerciseCount: chapter.exercises.length,
  current: index === 4
}));

const cppChapters = cppHandbookData.chapters.map((chapter, index) => ({
  id: chapter.chapter_id,
  title: chapter.chapter_title,
  topics: ["Comprehensive Guide", chapter.level],
  duration: "40 min",
  completed: index < 3,
  exerciseCount: chapter.exercises.length,
  current: index === 3
}));

const javascriptChapters = javascriptHandbookData.chapters?.map((chapter, index) => ({
  id: chapter.chapter_id,
  title: chapter.chapter_title,
  topics: ["Comprehensive Guide", chapter.level || "Beginner"],
  duration: "30 min",
  completed: index < 2,
  exerciseCount: chapter.exercises?.length || 0,
  videoCount: 0,
  current: index === 2
})) || [];

const sqlChapters = sqlHandbookData.chapters?.map((chapter, index) => ({
  id: chapter.chapter_id,
  title: chapter.chapter_title,
  topics: ["Database Concepts", chapter.level || "Beginner"],
  duration: "35 min",
  completed: index < 5,
  exerciseCount: chapter.exercises?.length || 0,
  videoCount: 0,
  current: index === 5
})) || [];

const goChapters = goHandbookData.chapters.map(chapter => ({
  id: chapter.chapter_id,
  title: chapter.chapter_title,
  topics: ["Comprehensive Guide", chapter.level || "Beginner"],
  duration: "30 min",
  videoCount: 0,
  exerciseCount: chapter.exercises?.length || 0,
  completed: false,
  current: false
}));

const allChapters = {
  python: pythonChapters,
  java: javaChapters,
  cpp: cppChapters,
  javascript: javascriptChapters,
  sql: sqlChapters,
  go: goChapters
};
const codeSnippets = {
  python: {
    title: "Two Sum - Python",
    code: `def two_sum(nums, target):
    """
    Find two numbers that add up to target.
    Time: O(n), Space: O(n)
    """
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Example usage
nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))  # [0, 1]`
  },
  java: {
    title: "Two Sum - Java",
    code: `public int[] twoSum(int[] nums, int target) {
    // Time: O(n), Space: O(n)
    Map<Integer, Integer> seen = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (seen.containsKey(complement)) {
            return new int[] {seen.get(complement), i};
        }
        seen.put(nums[i], i);
    }
    return new int[] {};
}`
  },
  cpp: {
    title: "Two Sum - C++",
    code: `vector<int> twoSum(vector<int>& nums, int target) {
    // Time: O(n), Space: O(n)
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement)) {
            return {seen[complement], i};
        }
        seen[nums[i]] = i;
    }
    return {};
}`
  },
  javascript: {
    title: "Two Sum - JavaScript",
    code: `function twoSum(nums, target) {
    // Time: O(n), Space: O(n)
    const seen = new Map();
for (let i = 0; i < nums.length; i++) {
  const complement = target - nums[i];
  if (seen.has(complement)) {
    return [seen.get(complement), i];
  }
  seen.set(nums[i], i);
}
return [];
}`
  },
  sql: {
    title: "Find Users - SQL",
    code: `SELECT id, username, email 
FROM users 
WHERE created_at > '2024-01-01'
ORDER BY created_at DESC; `
  },
  go: {
    title: "Two Sum - Go",
    code: `func twoSum(nums[]int, target int)[]int {
  seen:= make(map[int]int)
  for i, num := range nums {
    complement:= target - num
    if idx, ok := seen[complement]; ok {
      return []int{ idx, i }
    }
    seen[num] = i
  }
  return nil
}`
  }
};
const quickReferences = [
  {
    category: "Array Operations",
    items: [
      { python: "arr.append(x)", java: "list.add(x)", cpp: "vec.push_back(x)" },
      { python: "arr.pop()", java: "list.remove(size-1)", cpp: "vec.pop_back()" },
      { python: "len(arr)", java: "list.size()", cpp: "vec.size()" },
      { python: "arr.sort()", java: "Collections.sort(list)", cpp: "sort(vec.begin(), vec.end())" }
    ]
  },
  {
    category: "String Operations",
    items: [
      { python: "s.lower()", java: "s.toLowerCase()", cpp: "transform(s.begin(), s.end(), ::tolower)" },
      { python: "s.split(' ')", java: 's.split(" ")', cpp: "stringstream + getline" },
      { python: "'-'.join(arr)", java: 'String.join("-", arr)', cpp: "manual loop" },
      { python: "s[::-1]", java: "new StringBuilder(s).reverse()", cpp: "reverse(s.begin(), s.end())" }
    ]
  },
  {
    category: "HashMap/Dictionary",
    items: [
      { python: "d = {}", java: "Map<K,V> map = new HashMap<>()", cpp: "unordered_map<K,V> map" },
      { python: "d[key] = val", java: "map.put(key, val)", cpp: "map[key] = val" },
      { python: "key in d", java: "map.containsKey(key)", cpp: "map.count(key)" },
      {
        python: "d.get(key, default)",
        java: "map.getOrDefault(key, default)",
        cpp: "map.count(key) ? map[key] : default"
      }
    ]
  }
];
const tutorialContent = {
  python: {
    currentTopic: "Python Master Handbook (24 Chapters)",
    sections: pythonHandbookData.chapters.map(chapter => ({
      title: `${chapter.chapter_id}.${chapter.chapter_title}`,
      content: chapter.theory,
      code: chapter.examples.map(ex => `# ${ex.title} \n${ex.code} \n# ${ex.explanation} `).join('\n\n')
    })),
    exercises: pythonHandbookData.chapters.flatMap((chapter, i) =>
      chapter.exercises.map((ex, j) => ({
        id: `${chapter.chapter_id} -${j} `,
        title: ex.question,
        difficulty: ex.difficulty,
        completed: false
      }))
    ).slice(0, 10) // Show first 10 for demo in exercises tab
  },
  java: {
    currentTopic: "Java Master Handbook (28 Chapters)",
    sections: javaHandbookData.chapters.map(chapter => ({
      title: `${chapter.chapter_id}. ${chapter.chapter_title} `,
      content: chapter.theory,
      code: chapter.examples?.map(ex => `// ${ex?.title || 'Example'}\n${ex?.code || ''}\n// ${ex?.explanation || ''}`).join('\n\n') || ""
    })),
    exercises: javaHandbookData.chapters.flatMap((chapter, i) =>
      chapter.exercises.map((ex, j) => ({
        id: `${chapter.chapter_id}-${j}`,
        title: ex.question,
        difficulty: ex.difficulty,
        completed: false
      }))
    ).slice(0, 10)
  },
  cpp: {
    currentTopic: "C++ Programming Handbook (26 Chapters)",
    sections: cppHandbookData.chapters.map(chapter => ({
      title: `${chapter.chapter_id}. ${chapter.chapter_title}`,
      content: chapter.theory,
      code: chapter.examples?.map(ex => `// ${ex?.title || 'Example'}\n${ex?.code || ''}\n// ${ex?.explanation || ''}`).join('\n\n') || ""
    })),
    exercises: cppHandbookData.chapters.flatMap((chapter, i) =>
      chapter.exercises.map((ex, j) => ({
        id: `${chapter.chapter_id}-${j}`,
        title: ex.question,
        difficulty: ex.difficulty,
        completed: false
      }))
    ).slice(0, 10)
  },
  javascript: {
    currentTopic: "JavaScript 2022 Handbook (22 Chapters)",
    sections: javascriptHandbookData.chapters?.map(chapter => ({
      title: `${chapter.chapter_id}. ${chapter.chapter_title}`,
      content: chapter.theory,
      code: chapter.examples?.map(ex => `// ${ex?.title || 'Example'}\n${ex?.code || ''}\n// ${ex?.explanation || ''}`).join('\n\n') || ""
    })) || [],
    exercises: javascriptHandbookData.chapters?.flatMap((chapter, i) =>
      chapter.exercises?.map((ex, j) => ({
        id: `${chapter.chapter_id}-${j}`,
        title: ex.question,
        difficulty: ex.difficulty,
        completed: false
      })) || []
    ).slice(0, 10) || []
  },
  sql: {
    currentTopic: "SQL Handbook (15 Chapters)",
    sections: sqlHandbookData.chapters?.map(chapter => ({
      title: `${chapter.chapter_id}. ${chapter.chapter_title}`,
      content: chapter.theory,
      code: chapter.examples?.map(ex => `// ${ex?.title || 'Example'}\n${ex?.code || ''}\n// ${ex?.explanation || ''}`).join('\n\n') || ""
    })) || [],
    exercises: sqlHandbookData.chapters?.flatMap((chapter, i) =>
      chapter.exercises?.map((ex, j) => ({
        id: `${chapter.chapter_id}-${j}`,
        title: ex.question,
        difficulty: ex.difficulty,
        completed: false
      })) || []
    ).slice(0, 10) || []
  },
  go: {
    currentTopic: "Go Master Handbook (18 Chapters)",
    sections: goHandbookData.chapters.map(chapter => ({
      title: `${chapter.chapter_id}. ${chapter.chapter_title}`,
      content: chapter.theory,
      code: chapter.examples.map(ex => `// ${ex.title}\n${ex.code}\n// ${ex.explanation}`).join('\n\n')
    })),
    exercises: goHandbookData.chapters.flatMap((chapter, i) =>
      chapter.exercises.map((ex, j) => ({
        id: `${chapter.chapter_id}-${j}`,
        title: ex.question,
        difficulty: ex.difficulty,
        completed: false
      }))
    ).slice(0, 10)
  }
};


const interviewTips = [
  {
    title: "Two Pointer Technique",
    description: "Use two pointers for problems involving sorted arrays or finding pairs. Reduces O(n^2) to O(n).",
    example: "Finding pair with target sum, removing duplicates in-place"
  },
  {
    title: "Sliding Window",
    description: "Maintain a window of elements for subarray problems. Efficient for max/min subarray of size k.",
    example: "Maximum sum subarray, longest substring without repeating chars"
  },
  {
    title: "Hash Map for O(1) Lookup",
    description: "Trade space for time. Store seen elements for instant lookup.",
    example: "Two Sum, finding duplicates, anagram grouping"
  },
  {
    title: "In-place Modification",
    description: "Many interviewers prefer O(1) space solutions. Modify array in place when possible.",
    example: "Rotate array, move zeros, Dutch national flag"
  }
];
export default function HandbookPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("python");



  const [activeTab, setActiveTab] = useState("languages");
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState([1, 3]);
  const [activeSection, setActiveSection] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [userNotes, setUserNotes] = useState("");
  const copyCode = (code) => {
    const textToCopy = code || codeSnippets[selectedLanguage].code;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  const toggleBookmark = (id) => {
    setBookmarked((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };
  return <div className="min-h-[calc(100vh-4rem)] bg-background">
    <div className="container mx-auto p-6 lg:p-8">
      {
        /* Header */
      }
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="rounded-lg bg-primary/10 p-2 transition-transform duration-300 hover:scale-110">
            <Book className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Language Handbook</h1>
        </div>
        <p className="text-muted-foreground">
          Master programming languages with comprehensive guides, syntax references, and interview-focused content
        </p>
      </div>

      {
        /* Stats Banner */
      }


      {
        /* Search */
      }


      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">


        {
          /* Languages Tab */
        }
        <TabsContent value="languages">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {languages.map((lang) => <Card
              key={lang.id}
              onClick={() => setSelectedLanguage(lang.id)}
              className={`group cursor-pointer border-border bg-card transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 ${selectedLanguage === lang.id ? "border-primary ring-2 ring-primary/20" : "hover:border-primary/30"}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {lang.icon}
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {lang.popularity}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{lang.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{lang.description}</p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {lang.chapters} chapters
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {lang.duration}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {lang.students} learners
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {lang.rating}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Progress</span>
                    <span className="text-primary font-medium">{lang.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${lang.color} transition-all duration-500 group-hover:shadow-lg`}
                      style={{ width: `${lang.progress}%` }}
                    />
                  </div>
                </div>

                <Button
                  className="w-full mt-4 group/btn bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLanguage(lang.id);
                    setActiveTab("tutorials");
                  }}
                >
                  {lang.progress > 0 ? "Continue Learning" : "Start Learning"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>)}
          </div>
        </TabsContent>

        {/* Tutorials Tab (Hidden Trigger, Programmatic Access) */}
        <TabsContent value="tutorials" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-4">
            <div className="lg:col-span-1 space-y-2 h-[calc(100vh-12rem)] overflow-y-auto pr-2">
              {tutorialContent[selectedLanguage]?.sections?.map((section, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveSection(idx)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${activeSection === idx ? "border-primary bg-primary/10 text-primary" : "border-border hover:bg-secondary/50"}`}
                >
                  <p className="text-sm font-medium line-clamp-2">{section.title}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {tutorialContent[selectedLanguage]?.sections?.[activeSection]?.title || "Select a Chapter"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {tutorialContent[selectedLanguage]?.sections?.[activeSection]?.content}
                    </p>
                  </div>

                  {tutorialContent[selectedLanguage]?.sections?.[activeSection]?.code && (
                    <div className="rounded-lg bg-[#1e1e2e] p-4 font-mono text-sm overflow-x-auto relative group">
                      <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-white" onClick={() => copyCode(tutorialContent[selectedLanguage].sections[activeSection].code)}>
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <pre className="text-blue-400">
                        {tutorialContent[selectedLanguage].sections[activeSection].code}
                      </pre>
                    </div>
                  )}

                  <div className="flex justify-between pt-6">
                    <Button
                      variant="outline"
                      disabled={activeSection === 0}
                      onClick={() => setActiveSection(prev => Math.max(0, prev - 1))}
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={() => setActiveSection(prev => Math.min((tutorialContent[selectedLanguage]?.sections?.length || 1) - 1, prev + 1))}
                    >
                      Next Chapter
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {
          /* Chapters Tab */
        }
        <TabsContent value="chapters">
          <div className="grid gap-6 lg:grid-cols-3">
            {
              /* Chapter List */
            }
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="text-2xl">{languages.find(l => l.id === selectedLanguage)?.icon}</span>
                  {languages.find(l => l.id === selectedLanguage)?.name} Chapters
                </h2>
                <Badge variant="outline">3/24 Completed</Badge>
              </div>

              {allChapters[selectedLanguage]?.map((chapter, index) => <Card
                key={chapter.id}
                onClick={() => {
                  setActiveSection(index);
                  setActiveTab("tutorials");
                  window.scrollTo(0, 0);
                }}
                className={`group cursor-pointer border-border bg-card transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:translate-x-1 ${chapter.completed ? "border-green-500/30 bg-green-500/5" : ""} ${chapter.current ? "border-primary ring-2 ring-primary/20" : ""}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg font-bold transition-all duration-300 ${chapter.completed ? "bg-green-500 text-white" : chapter.current ? "bg-primary text-primary-foreground animate-pulse" : "bg-secondary group-hover:bg-primary group-hover:text-primary-foreground"}`}
                    >
                      {chapter.completed ? "X" : index + 1}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            {chapter.title}
                          </h3>
                          {chapter.current && <Badge className="mt-1 bg-primary/20 text-primary">In Progress</Badge>}
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark(chapter.id);
                            }}
                            className="p-1 rounded hover:bg-secondary transition-colors"
                          >
                            {bookmarked.includes(chapter.id) ? <BookmarkCheck className="h-4 w-4 text-primary" /> : <Bookmark className="h-4 w-4 text-muted-foreground" />}
                          </button>
                          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-2">
                        {chapter.topics.map((topic) => <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>)}
                      </div>

                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {chapter.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Video className="h-3 w-3" />
                          {chapter.videoCount} videos
                        </span>
                        <span className="flex items-center gap-1">
                          <Code2 className="h-3 w-3" />
                          {chapter.exerciseCount} exercises
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
            </div>

            {
              /* Progress Sidebar */
            }
            <div className="space-y-4">
              <Card className="border-border bg-card sticky top-6">
                <CardHeader>
                  <CardTitle className="text-lg">Your Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/20 to-cyan-500/20">
                    <p className="text-4xl font-bold text-primary">12.5%</p>
                    <p className="text-sm text-muted-foreground">Overall Completion</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Chapters Read</span>
                      <span className="font-medium">3/24</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Time Spent</span>
                      <span className="font-medium">1h 55m</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Exercises Done</span>
                      <span className="font-medium">18/45</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Bookmarked</span>
                      <span className="font-medium">{bookmarked.length} chapters</span>
                    </div>
                  </div>

                  <Button className="w-full group bg-primary hover:bg-primary/90">
                    Continue Learning
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>

              {
                /* Achievements */
              }
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: "", name: "First Step", unlocked: true },
                      { icon: "", name: "Bookworm", unlocked: true },
                      { icon: "", name: "On Fire", unlocked: true },
                      { icon: "", name: "Speed Learner", unlocked: false },
                      { icon: "", name: "Champion", unlocked: false },
                      { icon: "", name: "Master", unlocked: false }
                    ].map((badge, i) => <div
                      key={i}
                      className={`text-center p-2 rounded-lg border transition-all duration-300 hover:scale-105 ${badge.unlocked ? "border-primary/30 bg-primary/10" : "border-border bg-secondary/50 opacity-50"}`}
                    >
                      <p className="text-xs mt-1">{badge.name}</p>
                    </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {
          /* Code Snippets Tab */
        }
        <TabsContent value="snippets">
          <div className="grid gap-6 lg:grid-cols-2">
            {
              /* Language Selector & Code */
            }
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Common DSA Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["python", "java", "cpp"].map((lang) => <Button
                    key={lang}
                    variant={selectedLanguage === lang ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLanguage(lang)}
                    className="capitalize transition-all duration-300 hover:scale-105"
                  >
                    {lang === "cpp" ? "C++" : lang}
                  </Button>)}
                </div>

                <div className="rounded-lg bg-[#1e1e2e] p-4 font-mono text-sm overflow-x-auto group relative">
                  <div className="flex items-center justify-between mb-3 text-muted-foreground">
                    <span>{codeSnippets[selectedLanguage].title}</span>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyCode()}
                        className="h-8 px-2 hover:bg-white/10"
                      >
                        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2 hover:bg-white/10">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <pre className="text-green-400 whitespace-pre-wrap">
                    {codeSnippets[selectedLanguage].code}
                  </pre>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Play className="h-4 w-4 mr-1" />
                    Run Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Open in Editor
                  </Button>
                </div>
              </CardContent>
            </Card>

            {
              /* Popular Snippets */
            }
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Popular Snippets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Binary Search", category: "Searching", views: "12.5k", difficulty: "Easy" },
                    { name: "Merge Sort", category: "Sorting", views: "10.2k", difficulty: "Medium" },
                    { name: "BFS/DFS Template", category: "Graphs", views: "9.8k", difficulty: "Medium" },
                    { name: "Sliding Window", category: "Arrays", views: "8.5k", difficulty: "Medium" },
                    { name: "Two Pointers", category: "Arrays", views: "8.2k", difficulty: "Easy" },
                    { name: "Backtracking Template", category: "Recursion", views: "7.1k", difficulty: "Hard" },
                    { name: "Dynamic Programming", category: "DP", views: "15.3k", difficulty: "Hard" },
                    { name: "Trie Implementation", category: "Trees", views: "6.4k", difficulty: "Medium" }
                  ].map((snippet, i) => <div
                    key={i}
                    className="group flex items-center justify-between rounded-lg border border-border p-3 cursor-pointer transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:translate-x-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded bg-primary/10 p-2 transition-all group-hover:bg-primary group-hover:scale-110">
                        <FileCode className="h-4 w-4 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">{snippet.name}</p>
                        <p className="text-xs text-muted-foreground">{snippet.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="outline"
                        className={snippet.difficulty === "Easy" ? "text-green-400 border-green-400/30" : snippet.difficulty === "Medium" ? "text-yellow-400 border-yellow-400/30" : "text-red-400 border-red-400/30"}
                      >
                        {snippet.difficulty}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{snippet.views}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {
          /* Quick Reference Tab */
        }
        <TabsContent value="reference">
          <div className="space-y-6">
            {quickReferences.map((ref) => <Card
              key={ref.category}
              className="border-border bg-card group hover:border-primary/30 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  {ref.category === "Array Operations" && <Database className="h-5 w-5 text-primary" />}
                  {ref.category === "String Operations" && <Terminal className="h-5 w-5 text-primary" />}
                  {ref.category === "HashMap/Dictionary" && <Braces className="h-5 w-5 text-primary" />}
                  {ref.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-3 font-medium text-muted-foreground">Python</th>
                        <th className="text-left py-2 px-3 font-medium text-muted-foreground">Java</th>
                        <th className="text-left py-2 px-3 font-medium text-muted-foreground">C++</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ref.items.map((item, i) => <tr key={i} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                        <td className="py-2 px-3 font-mono text-xs text-yellow-500">{item.python}</td>
                        <td className="py-2 px-3 font-mono text-xs text-orange-500">{item.java}</td>
                        <td className="py-2 px-3 font-mono text-xs text-blue-500">{item.cpp}</td>
                      </tr>)}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>)}

            {
              /* Big O Cheat Sheet */
            }
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  Time Complexity Cheat Sheet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      complexity: "O(1)",
                      name: "Constant",
                      color: "bg-green-500",
                      examples: "Array access, Hash lookup"
                    },
                    {
                      complexity: "O(log n)",
                      name: "Logarithmic",
                      color: "bg-cyan-500",
                      examples: "Binary search, BST operations"
                    },
                    {
                      complexity: "O(n)",
                      name: "Linear",
                      color: "bg-yellow-500",
                      examples: "Linear search, Array traversal"
                    },
                    {
                      complexity: "O(n log n)",
                      name: "Linearithmic",
                      color: "bg-orange-500",
                      examples: "Merge sort, Quick sort"
                    },
                    {
                      complexity: "O(n^2)",
                      name: "Quadratic",
                      color: "bg-red-500",
                      examples: "Bubble sort, Nested loops"
                    },
                    {
                      complexity: "O(2^n)",
                      name: "Exponential",
                      color: "bg-red-700",
                      examples: "Recursive Fibonacci, Subsets"
                    },
                    {
                      complexity: "O(n!)",
                      name: "Factorial",
                      color: "bg-purple-700",
                      examples: "Permutations, TSP brute force"
                    }
                  ].map((item) => <div
                    key={item.complexity}
                    className="group rounded-lg border border-border p-3 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:scale-105"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`h-3 w-3 rounded-full ${item.color}`} />
                      <code className="font-bold group-hover:text-primary transition-colors">
                        {item.complexity}
                      </code>
                    </div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.examples}</p>
                  </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {
          /* NEW: Interview Tips Tab */
        }
        <TabsContent value="interview">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {
                /* Interview Tips Cards */
              }
              <div className="grid gap-4 md:grid-cols-2">
                {interviewTips.map((tip, i) => <Card
                  key={i}
                  className="border-border bg-card group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-primary/10 p-2 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <Lightbulb className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">{tip.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{tip.description}</p>
                        <p className="text-xs text-primary/70 mt-2 font-medium">Examples: {tip.example}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
              </div>

              {
                /* Common Patterns */
              }
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Most Asked Patterns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { pattern: "Array Manipulation", frequency: 95, companies: "Google, Amazon, Meta" },
                      { pattern: "Two Pointers", frequency: 88, companies: "Microsoft, Apple, Netflix" },
                      { pattern: "Sliding Window", frequency: 82, companies: "Uber, Airbnb, LinkedIn" },
                      { pattern: "Binary Search", frequency: 78, companies: "All FAANG companies" },
                      { pattern: "Hash Map Usage", frequency: 92, companies: "Every tech company" },
                      { pattern: "Tree Traversal", frequency: 75, companies: "Google, Meta, Amazon" },
                      { pattern: "Graph BFS/DFS", frequency: 70, companies: "Google, Uber, Lyft" },
                      { pattern: "Dynamic Programming", frequency: 65, companies: "Google, Amazon, Microsoft" }
                    ].map((item, i) => <div
                      key={i}
                      className="group p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {item.pattern}
                        </span>
                        <Badge variant="outline" className="text-primary border-primary/30">
                          {item.frequency}% frequency
                        </Badge>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-500"
                          style={{ width: `${item.frequency}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Asked at: {item.companies}</p>
                    </div>)}
                  </div>
                </CardContent>
              </Card>

              {
                /* Do's and Don'ts */
              }
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-green-500/30 bg-green-500/5">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-green-400">
                      <CheckCircle className="h-5 w-5" />
                      Interview Do's
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {[
                      "Clarify requirements before coding",
                      "Think out loud - explain your approach",
                      "Start with brute force, then optimize",
                      "Write clean, readable code",
                      "Test with edge cases",
                      "Ask for hints when stuck",
                      "Discuss time & space complexity"
                    ].map((item, i) => <div key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>)}
                  </CardContent>
                </Card>

                <Card className="border-red-500/30 bg-red-500/5">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-red-400">
                      <X className="h-5 w-5" />
                      Interview Don'ts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {[
                      "Don't jump into coding immediately",
                      "Avoid staying silent - communicate",
                      "Don't ignore interviewer hints",
                      "Avoid over-engineering solutions",
                      "Don't panic when stuck",
                      "Never argue with the interviewer",
                      "Don't forget to handle edge cases"
                    ].map((item, i) => <div key={i} className="flex items-start gap-2 text-sm">
                      <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>)}
                  </CardContent>
                </Card>
              </div>
            </div>

            {
              /* Sidebar */
            }
            <div className="space-y-4">
              {
                /* Quick Stats */
              }
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">Your Readiness</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-500/20 to-cyan-500/20">
                    <p className="text-4xl font-bold text-green-400">72%</p>
                    <p className="text-sm text-muted-foreground">Interview Ready</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { skill: "Arrays & Strings", level: 85 },
                      { skill: "Linked Lists", level: 70 },
                      { skill: "Trees & Graphs", level: 60 },
                      { skill: "Dynamic Programming", level: 45 },
                      { skill: "System Design", level: 30 }
                    ].map((item, i) => <div key={i} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{item.skill}</span>
                        <span className="font-medium">{item.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${item.level >= 70 ? "bg-green-500" : item.level >= 50 ? "bg-yellow-500" : "bg-red-500"}`}
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>)}
                  </div>
                </CardContent>
              </Card>

              {
                /* Mock Interview */
              }
              <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-cyan-500/10">
                <CardContent className="p-5 text-center">
                  <div className="rounded-full bg-primary/20 p-4 w-fit mx-auto mb-4">
                    <Flame className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Mock Interview</h3>
                  <p className="text-sm text-muted-foreground mb-4">Practice with AI-powered mock interviews</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 group">
                    Start Mock Interview
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>

              {
                /* Resources */
              }
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    { name: "Interview Cheat Sheet", icon: FileCode },
                    { name: "Top 100 Questions PDF", icon: Download },
                    { name: "Company Prep Guides", icon: BookOpen },
                    { name: "Behavioral Questions", icon: MessageSquare }
                  ].map((resource, i) => <Button
                    key={i}
                    variant="outline"
                    className="w-full justify-start gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all bg-transparent"
                  >
                    <resource.icon className="h-4 w-4" />
                    {resource.name}
                  </Button>)}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div >;
}
