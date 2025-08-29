'use client';

import { useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  MiniMap,
  MarkerType,
  NodeTypes,
} from 'reactflow';
import 'reactflow/dist/style.css';

import Image from 'next/image';

// Custom node component with thinker.png image
const FamilyMemberNode = ({ data }: { data: any }) => {
  return (
    <div className="bg-white dark:bg-amber-900 p-3 rounded-lg shadow-md border-2 border-amber-400 flex flex-col items-center w-[380px]">
      <div className="relative w-16 h-16 mb-2 overflow-hidden rounded-full border-2 border-amber-500">
        <Image 
          src="/thinker.png" 
          alt="Family Member" 
          fill 
          style={{ objectFit: 'cover' }} 
        />
      </div>
      <div className="text-center">
        <p className="font-semibold text-amber-800 dark:text-amber-200">{data.name}</p>
        <p className="text-xs text-amber-600 dark:text-amber-300">{data.birthYear} - {data.deathYear || 'Present'}</p>
        <p className="text-xs text-amber-500">{data.relationship}</p>
        <p className="text-xs text-amber-500">{data.bio}</p>

      </div>
    </div>
  );
};

// Node types definition
const nodeTypes: NodeTypes = {
  familyMember: FamilyMemberNode,
};

export default function FamilyTreeFlow() {
  // Initial nodes - 5 family members
  const initialNodes: Node[] = [
    {
      id: '1',
      type: 'familyMember',
      position: { x: 300, y: 50 },
      data: { 
        name: 'James Smith', 
        birthYear: '1950', 
        relationship: 'Grandfather' ,
        bio: 'James Smith was a great grandfather who lived in the United States. He was born in 1950 and died in 2005. He was a great grandfather who lived in the United States. He was born in 1950 and died in 2005. He was a great grandfather who lived in the United States. He was born in 1950 and died in 2005. He was a great grandfather who lived in the United States. He was born in 1950 and died in 2005.'
      },
    },
    {
      id: '2',
      type: 'familyMember',
      position: { x: 500, y: 50 },
      data: { 
        name: 'Mary Smith', 
        birthYear: '1952', 
        relationship: 'Grandmother' ,
        bio: 'Mary Smith was a great grandmother who lived in the United States. She was born in 1952 and died in 2005. She was a great grandmother who lived in the United States. She was born in 1952 and died in 2005. She was a great grandmother who lived in the United States. She was born in 1952 and died in 2005. She was a great grandmother who lived in the United States. She was born in 1952 and died in 2005.'
      },
    },
    {
      id: '3',
      type: 'familyMember',
      position: { x: 400, y: 200 },
      data: { 
        name: 'John Smith', 
        birthYear: '1975', 
        relationship: 'Father' ,
        bio: 'John Smith was a great grandfather who lived in the United States. He was born in 1950 and died in 2005. He was a great grandfather who lived in the United States. He was born in 1950 and died in 2005. He was a great grandfather who lived in the United States. He was born in 1950 and died in 2005. He was a great grandfather who lived in the United States. He was born in 1950 and died in 2005.'
      },
    },
    {
      id: '4',
      type: 'familyMember',
      position: { x: 600, y: 200 },
      data: { 
        name: 'Sarah Johnson', 
        birthYear: '1978', 
        relationship: 'Mother' ,
        bio: 'Sarah Johnson was a great grandmother who lived in the United States. She was born in 1952 and died in 2005. She was a great grandmother who lived in the United States. She was born in 1952 and died in 2005. She was a great grandmother who lived in the United States. She was born in 1952 and died in 2005. She was a great grandmother who lived in the United States. She was born in 1952 and died in 2005.'
      },
    },
    {
      id: '5',
      type: 'familyMember',
      position: { x: 500, y: 350 },
      data: { 
        name: 'Michael Smith', 
        birthYear: '2005', 
        relationship: 'Child' ,
        bio: 'Michael Smith was a great grandfather who lived in the United States. He was born in 1950 and died in 2005. He was a great grandfather who lived in the United States. He was born in 1950 and died in 2005. He was a great grandfather who lived in the United States. He was born in 1950 and died in 2005. He was a great grandfather who lived in the United States. He was born in 1950 and died in 2005.'
      },
    },
  ];

  // Initial edges - connections between family members
  const initialEdges: Edge[] = [
    {
      id: 'e1-3',
      source: '1',
      target: '3',
      type: 'smoothstep',
      markerEnd: { type: MarkerType.Arrow },
      style: { stroke: '#d97706' }
    },
    {
      id: 'e2-3',
      source: '2',
      target: '3',
      type: 'smoothstep',
      markerEnd: { type: MarkerType.Arrow },
      style: { stroke: '#d97706' }
    },
    {
      id: 'e3-5',
      source: '3',
      target: '5',
      type: 'smoothstep',
      markerEnd: { type: MarkerType.Arrow },
      style: { stroke: '#d97706' }
    },
    {
      id: 'e4-5',
      source: '4',
      target: '5',
      type: 'smoothstep',
      markerEnd: { type: MarkerType.Arrow },
      style: { stroke: '#d97706' }
    },
    {
      id: 'e3-4',
      source: '3',
      target: '4',
      type: 'straight',
      style: { stroke: '#d97706', strokeDasharray: '5,5' }
    }
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge({
        ...connection,
        type: 'smoothstep',
        markerEnd: { type: MarkerType.Arrow },
        style: { stroke: '#d97706' }
      }, eds));
    },
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      attributionPosition="bottom-left"
    >
      <Background color="#f5f5f4" />
      <Controls />
      <MiniMap
        nodeStrokeWidth={3}
        zoomable
        pannable
      />
    </ReactFlow>
  );
}