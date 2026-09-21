import { BoardGrid } from "@/components/board/BoardGrid"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Board and Management | Surge",
  description:
    "Meet the board and management team leading Surge Microfinance Limited in Ghana.",
  path: "/board-and-management",
})

export default function BoardPage() {
  return <BoardGrid />
}
