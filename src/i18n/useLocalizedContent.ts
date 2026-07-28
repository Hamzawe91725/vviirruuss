import { useMemo } from 'react';
import { servicesData, storeLocations, testimonialsData, valuePropsData } from '../data/mockData';
import { ServiceItem, StoreLocation, Testimonial, ValueProp } from '../types';
import { useI18n } from './I18nContext';

export function useLocalizedServices(): ServiceItem[] {
  const { t } = useI18n();
  return useMemo(
    () =>
      servicesData.map((service) => {
        const copy = t.serviceItems[service.id as keyof typeof t.serviceItems];
        return {
          ...service,
          title: copy.title,
          shortDesc: copy.shortDesc,
          fullDesc: copy.fullDesc,
          turnaround: copy.turnaround,
          features: [...copy.features],
          toolsUsed: [...copy.toolsUsed],
        };
      }),
    [t]
  );
}

export function useLocalizedTestimonials(): Testimonial[] {
  const { t } = useI18n();
  return useMemo(
    () =>
      testimonialsData.map((item, idx) => {
        const copy = t.testimonialsData[idx];
        return {
          ...item,
          quote: copy.quote,
          author: copy.author,
          role: copy.role,
          company: copy.company,
        };
      }),
    [t]
  );
}

export function useLocalizedValueProps(): ValueProp[] {
  const { t } = useI18n();
  return useMemo(
    () =>
      valuePropsData.map((item, idx) => ({
        ...item,
        title: t.valueProps[idx].title,
        description: t.valueProps[idx].description,
      })),
    [t]
  );
}

export function useLocalizedStores(): StoreLocation[] {
  const { t } = useI18n();
  return useMemo(
    () =>
      storeLocations.map((loc) => {
        const copy = t.stores[loc.id as keyof typeof t.stores];
        return {
          ...loc,
          name: copy.name,
          address: copy.address,
          city: copy.city,
          hours: copy.hours,
        };
      }),
    [t]
  );
}
