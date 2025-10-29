interface CoverLetterPageProps {
  params: Promise<{
    id: string;
  }>;
}

const CoverLetter = async ({ params }: CoverLetterPageProps) => {
  const { id } = await params; // ✅ unwrap the Promise first
  console.log("id:", id);

  return <div>CoverLetter Page for ID: {id}</div>;
};

export default CoverLetter;
