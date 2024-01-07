interface BreadcrumbItem {
  label: string;
  path: string;
}

export default function createBreadcrumb(url: string): BreadcrumbItem[] {
  // Remove queries if they exist
  const urlWithoutQuery = url.split("?")[0];

  // Remove leading and trailing slashes and split the URL into segments
  const segments = urlWithoutQuery
    .split("/")
    .filter((segment) => segment !== "");

  // Initialize an array to store breadcrumb items
  const breadcrumbs: BreadcrumbItem[] = [];

  // Iterate through the segments to build the breadcrumb items
  let currentPath = "";
  for (let i = 0; i < segments.length; i++) {
    currentPath += `/${segments[i]}`;
    breadcrumbs.push({
      label: segments[i],
      path: currentPath,
    });
  }

  // Add a Home breadcrumb as the first item
  breadcrumbs.unshift({ label: "Home", path: "/" });

  return breadcrumbs;
}
