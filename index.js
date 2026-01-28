```bash
npx create-next-app@latest nextjs-starter-2 --typescript
```

Once the project is created, navigate to the project directory:

```bash
cd nextjs-starter-2
```

Replace the content of `pages/index.tsx` with the following code:

```tsx
// pages/index.tsx

import React from 'react';

const Home: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Hello, World!</h1>
        </div>
    );
};

export default Home;
```

Now you can run your Next.js app:

```bash
npm run dev
```

Your Hello World app is ready for production on Vercel!