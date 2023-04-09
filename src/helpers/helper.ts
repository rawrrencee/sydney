import type { ClimbingArea, ClimbingLocationRoute } from '@/models/ClimbingLocation';

export const getRelativeGrade = (grade: string) => {
  if (grade?.toLocaleUpperCase().includes('VB')) return -1;
  let gradeInt = parseInt(grade.substring(1));
  if (isNaN(gradeInt)) return 999;
  return gradeInt;
};

export const getCleanGrade = (grade: string) => {
  let gradeString = '';
  const relativeGrade = getRelativeGrade(grade);
  switch (relativeGrade) {
    case -1:
      gradeString = 'VB';
      break;
    case 999:
      gradeString = 'Others';
      break;
    default:
      gradeString = `V${relativeGrade}`;
      break;
  }
  return gradeString;
};

const getGradeMap = (routes: ClimbingLocationRoute[]) => {
  const gradeMap = new Map<string, number>();
  [...routes]
    .filter((r) => r.grade.includes('V'))
    .sort((x, y) => getRelativeGrade(x.grade) - getRelativeGrade(y.grade))
    .forEach((r) => {
      let gradeString = getCleanGrade(r.grade);
      if (!gradeMap.has(gradeString)) {
        gradeMap.set(gradeString, 1);
      } else {
        gradeMap.set(gradeString, gradeMap.get(gradeString)! + 1);
      }
    });

  return gradeMap;
};

export const unqiueAreaGradeCounts = (routes: ClimbingLocationRoute[]) => {
  const gradeMap = getGradeMap(routes);
  return Array.from(gradeMap.keys()).map((k) => ({
    grade: k,
    gradeInt: getRelativeGrade(k),
    count: gradeMap.get(k) ?? 0
  }));
};

export const unqiueLocationGradeCounts = (areas: ClimbingArea[]) => {
  let routes: ClimbingLocationRoute[] = [];
  areas.forEach((a) => {
    routes = [...routes, ...a.routes];
  });
  const gradeMap = getGradeMap(routes);
  return Array.from(gradeMap.keys()).map((k) => ({
    grade: k,
    gradeInt: getRelativeGrade(k),
    count: gradeMap.get(k) ?? 0
  }));
};
