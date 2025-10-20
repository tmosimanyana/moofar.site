# 🧩 Component Review Guide

*Specialized checklist for reviewing React components*

---

## 🎯 Component Type

**What kind of component?**
- [ ] Page component (in `/pages`)
- [ ] UI component (in `/components/ui`)
- [ ] Feature component (in `/components`)
- [ ] Layout component
- [ ] Form component

---

## 1️⃣ Component Structure

### File & Naming
- [ ] **Filename matches component** - `UserProfile.tsx` exports `UserProfile`
- [ ] **PascalCase naming** - Component names capitalized
- [ ] **Single responsibility** - Component does one thing well
- [ ] **Appropriate location** - File in correct folder

### Export Pattern
```typescript
// ✅ Preferred
export default function ComponentName() { ... }

// ✅ Also acceptable
function ComponentName() { ... }
export default ComponentName;

// ❌ Avoid
export const ComponentName = () => { ... }
```

---

## 2️⃣ Props & Types

### Interface Definition
- [ ] **Props interface defined** - Clear type definition
- [ ] **Optional props marked** - Use `?` for optional
- [ ] **Default props provided** - For optional props
- [ ] **No `any` types** - Everything properly typed
- [ ] **Extends correct types** - e.g., `React.HTMLAttributes<HTMLDivElement>`

### Example
```typescript
// ✅ Good
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  priority?: 'high' | 'medium' | 'low';
  onClick?: () => void;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon: Icon,
  priority = 'medium',
  onClick 
}: ServiceCardProps) {
  // ...
}
```

---

## 3️⃣ State Management

### useState
- [ ] **Initial state correct type** - TypeScript infers or explicitly typed
- [ ] **State at right level** - Not passing through too many levels
- [ ] **Minimal state** - Only store what's needed
- [ ] **State updates immutable** - No `array.push()` or `object.property = value`

### Common Patterns
```typescript
// ✅ Form state
const [formData, setFormData] = useState({
  name: '',
  email: ''
});

// ✅ Immutable updates
setFormData(prev => ({ ...prev, name: 'New Name' }));

// ❌ Mutation
formData.name = 'New Name'; // Don't do this!
```

---

## 4️⃣ Effects & Side Effects

### useEffect
- [ ] **Dependency array correct** - All dependencies included
- [ ] **Cleanup function added** - For subscriptions/listeners
- [ ] **Not running on every render** - Check if deps needed
- [ ] **Async handled properly** - Using async functions correctly

### Patterns
```typescript
// ✅ Event listener with cleanup
useEffect(() => {
  const handler = () => { /* ... */ };
  window.addEventListener('resize', handler);
  return () => window.removeEventListener('resize', handler);
}, []);

// ✅ Fetch data
useEffect(() => {
  let cancelled = false;
  
  async function fetchData() {
    const data = await fetch('/api/data');
    if (!cancelled) setData(data);
  }
  
  fetchData();
  return () => { cancelled = true; };
}, []);
```

---

## 5️⃣ Event Handlers

### Naming & Typing
- [ ] **Named handle[Action]** - e.g., `handleClick`, `handleSubmit`
- [ ] **Properly typed** - Event parameter typed correctly
- [ ] **Prevents default when needed** - Forms, links
- [ ] **Async errors caught** - Try/catch blocks

### Examples
```typescript
// ✅ Form submit
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    await submitForm(formData);
  } catch (error) {
    console.error(error);
  }
};

// ✅ Click handler
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  // Handle click
};

// ✅ Input change
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
};
```

---

## 6️⃣ Rendering Logic

### Conditional Rendering
- [ ] **No nested ternaries** - Use multiple conditions or variables
- [ ] **Loading states handled** - Show skeletons/spinners
- [ ] **Error states handled** - Show error messages
- [ ] **Empty states handled** - "No items" messages

### Patterns
```typescript
// ✅ Clear conditions
if (isLoading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;
if (!data) return <EmptyState />;

return <Content data={data} />;

// ✅ Conditional JSX
{isVisible && <Modal />}
{items.length > 0 ? <List items={items} /> : <EmptyState />}

// ❌ Nested ternaries
{isLoading ? <Spinner /> : error ? <Error /> : data ? <Content /> : null}
```

---

## 7️⃣ Styling (Tailwind)

### Class Application
- [ ] **Responsive classes used** - `md:`, `lg:` breakpoints
- [ ] **No inline styles** - Use Tailwind utilities
- [ ] **Consistent spacing** - Use spacing scale
- [ ] **Brand colors** - Use theme colors
- [ ] **No duplicate classes** - Clean class strings

### Patterns
```typescript
// ✅ Conditional classes with clsx
import { clsx } from 'clsx';

<div className={clsx(
  'base-classes',
  isActive && 'active-classes',
  size === 'large' && 'large-classes'
)}>

// ✅ Responsive
<div className="text-sm md:text-base lg:text-lg">

// ✅ Theme colors
<div className="bg-[#1b5e20] text-white">
```

---

## 8️⃣ Accessibility

### Semantic HTML
- [ ] **Correct element types** - Button vs a vs div
- [ ] **ARIA labels present** - For icon-only buttons
- [ ] **Keyboard accessible** - Tab navigation works
- [ ] **Focus visible** - Can see focused state

### Patterns
```typescript
// ✅ Button for actions
<button onClick={handleClick} aria-label="Close menu">
  <X className="w-4 h-4" />
</button>

// ✅ Link for navigation
<Link href="/about">
  <a className="...">About</a>
</Link>

// ✅ Form labels
<label htmlFor="email" className="...">
  Email Address
  <input id="email" type="email" />
</label>
```

---

## 9️⃣ Performance

### Optimization
- [ ] **Memoization used wisely** - Only when needed
- [ ] **Expensive calculations memoized** - `useMemo`
- [ ] **Callbacks memoized** - `useCallback` for child props
- [ ] **Large lists virtualized** - If rendering 100+ items
- [ ] **Images lazy loaded** - Below the fold

### When to Optimize
```typescript
// ✅ Expensive calculation
const expensiveValue = useMemo(() => {
  return heavyComputation(data);
}, [data]);

// ✅ Callback passed to child
const handleChildClick = useCallback(() => {
  doSomething();
}, [dependency]);

// ❌ Over-optimization
const value = useMemo(() => data.length, [data]); // Too simple!
```

---

## 🔟 Forms

### Form Components
- [ ] **Controlled inputs** - Value from state
- [ ] **Validation logic** - Client-side validation
- [ ] **Error messages** - Show validation errors
- [ ] **Submit handler** - Prevents default
- [ ] **Disabled during submit** - Prevent double submit
- [ ] **Success feedback** - Confirm submission

### Pattern
```typescript
const [formData, setFormData] = useState({ name: '', email: '' });
const [errors, setErrors] = useState<Record<string, string>>({});
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    // Validate
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit
    await submitForm(formData);
    
    // Success
    toast.success('Form submitted!');
    setFormData({ name: '', email: '' });
  } catch (error) {
    toast.error('Submission failed');
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## 1️⃣1️⃣ Component Composition

### Children & Composition
- [ ] **Accepts children prop** - If it's a wrapper
- [ ] **Composable design** - Can be combined with others
- [ ] **Flexible props** - Not too rigid
- [ ] **Slots pattern used** - For complex composition

### Patterns
```typescript
// ✅ Accepts children
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// ✅ Slots pattern
interface ModalProps {
  header: React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
}

// ✅ Render prop
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}
```

---

## 1️⃣2️⃣ Error Boundaries

### Error Handling
- [ ] **Try/catch for async** - Catch fetch errors
- [ ] **Error state displayed** - Show user-friendly message
- [ ] **Fallback UI** - Something instead of crash
- [ ] **Error boundary used** - For critical components

---

## 1️⃣3️⃣ Testing Considerations

### Testability
- [ ] **Logic separated** - Extract complex logic to functions
- [ ] **Props are simple** - Not overly complex
- [ ] **Side effects isolated** - Easy to mock
- [ ] **Render logic simple** - Not too many conditions

---

## 📋 Component Checklist Template

```markdown
## Component: [ComponentName]

### Structure
- [ ] Properly named and located
- [ ] Single responsibility
- [ ] Props interface defined
- [ ] Default exports used

### Functionality
- [ ] Works as expected
- [ ] Edge cases handled
- [ ] Loading/error states
- [ ] Form validation (if applicable)

### Code Quality
- [ ] No TypeScript errors
- [ ] No any types
- [ ] Proper event typing
- [ ] Clean, readable code

### Styling
- [ ] Tailwind classes only
- [ ] Responsive design
- [ ] Brand colors used
- [ ] Consistent spacing

### Accessibility
- [ ] Semantic HTML
- [ ] Keyboard accessible
- [ ] ARIA labels where needed
- [ ] Focus states visible

### Performance
- [ ] Optimization where needed
- [ ] No unnecessary re-renders
- [ ] Memoization appropriate

### Ready to merge: ✅ / ⚠️ / ❌
```

---

## 🎯 Common Component Anti-Patterns

### ❌ God Component
Component doing too many things. Split into smaller components.

### ❌ Prop Drilling
Passing props through 3+ levels. Use context or composition.

### ❌ Inline Functions in JSX
```typescript
// ❌ Bad - creates new function every render
<button onClick={() => handleClick(id)}>

// ✅ Better
<button onClick={handleClick}>
```

### ❌ Missing Dependencies
```typescript
// ❌ Bad
useEffect(() => {
  doSomething(data);
}, []); // Missing 'data' dependency

// ✅ Good
useEffect(() => {
  doSomething(data);
}, [data]);
```

### ❌ Direct State Mutation
```typescript
// ❌ Bad
items.push(newItem);
setItems(items);

// ✅ Good
setItems([...items, newItem]);
```

---

## 🚀 Quick Component Review Script

```bash
# Check a specific component
echo "Reviewing: $1"
echo ""

# TypeScript errors
echo "TypeScript check:"
npx tsc --noEmit $1

# Find any types
echo ""
echo "Any types:"
grep -n ": any" $1

# Find console.logs
echo ""
echo "Console.logs:"
grep -n "console.log" $1

# Find inline styles
echo ""
echo "Inline styles:"
grep -n 'style=' $1

# Component size
echo ""
echo "Line count:"
wc -l $1
```

Save as `review-component.sh` and run: `./review-component.sh client/src/components/MyComponent.tsx`

---

*Use this guide for every new component review!*