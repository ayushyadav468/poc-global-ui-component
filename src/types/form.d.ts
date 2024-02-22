import { formSchema } from '@/schema/formSchema';
import * as zod from 'zod';

export type FormDataType = zod.infer<typeof formSchema>;
