interface MyPlaylistsProps {
  title: string;
}

export function MyPlaylists({ title }: MyPlaylistsProps) {
  return (
    <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">{title}</a>
  )
}