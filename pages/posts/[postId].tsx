import * as React from 'react';
import { useRouter } from 'next/router';

export interface PostDetailProps {
}

export default function PostDetail (props: PostDetailProps) {
    const router = useRouter();

  return (
    <div>
      <p>
        Query: {JSON.stringify(router.query)}
      </p>
    </div>
  );
}
