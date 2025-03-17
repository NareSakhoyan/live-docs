'use client';
import { Button } from './ui/button';
import { createDocumet } from '@/lib/actions/room.actions';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function AddDocumentBtn({ userId, email }: AddDocumentBtnProps) {
  const router = useRouter();
  const addDocumentHandler = async () => {
    try {
      const room = await createDocumet({ userId, email });
      if (room) router.push(`/documents/${room.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      type="submit"
      onClick={addDocumentHandler}
      className="gradient-blue flex gap-q shadow-md"
    >
      <Image src="/assets/icons/add.svg" alt="add" width={24} height={24} />
      <p className="hidden sm:block">Start a blank document</p>
    </Button>
  );
}

export default AddDocumentBtn;
