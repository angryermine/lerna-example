export interface Customer {
  id: string;
  name: string;
}

export function customers(count: number = 10): Customer[] {
  return Array.from({length: count}).map((_, index) => {
    const id = `${index + 1}`;
    return {
      id,
      name: `Customer ${id}`,
    };
  });
}
