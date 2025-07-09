"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export function TestDataDisplay() {
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tableInfo, setTableInfo] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createClient();
        
        console.log('Checking available tables...');
        
        // Try different common table names
        const tableNames = ['users', 'user', 'profiles', 'test', 'notes', 'posts'];
        
        for (const tableName of tableNames) {
          console.log(`Trying table: ${tableName}`);
          const { data: result, error } = await supabase
            .from(tableName)
            .select('*')
            .limit(1);
          
          console.log(`${tableName} table result:`, { data: result, error });
          
          if (!error && result && result.length > 0) {
            console.log(`Found data in ${tableName} table!`);
            setTableInfo(`Found data in ${tableName} table`);
            
            // Now get all data from this table
            const { data: allData, error: allError } = await supabase
              .from(tableName)
              .select('*');
            
            if (!allError) {
              setData(allData);
              setLoading(false);
              return;
            }
          }
        }
        
        setError('No data found in any common tables (users, user, profiles, test, notes, posts)');
        
      } catch (err) {
        console.error('Catch error:', err);
        setError(`Connection error: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Checking for available tables...</div>;
  }

  if (error) {
    return (
      <div>
        <div>Error: {error}</div>
        <div style={{marginTop: '10px', fontSize: '12px', color: '#666'}}>
          Check the browser console to see which tables were tried.
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <div>No data found in any tables</div>;
  }

  return (
    <div>
      <h2>Table Data ({data.length} rows):</h2>
      {tableInfo && <div style={{marginBottom: '10px', color: '#666'}}>{tableInfo}</div>}
      {data.map((item, index) => (
        <div key={index} style={{margin: '10px 0', padding: '10px', border: '1px solid #ccc'}}>
          <pre>{JSON.stringify(item, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
} 